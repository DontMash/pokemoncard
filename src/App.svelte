<script lang="ts">
  import { writable } from 'svelte/store';
  import Card from './lib/card/Card.svelte';
  import Loading from './lib/Loading.svelte';

  import { getPokemon } from './lib/types/pokemon-api.service';

  const POKEMON_STORAGE_KEY = 'pokemon';
  const PREVIOUS_POKEMON_STORAGE_KEY = 'previous-pokemon';

  const defaultPokemonRequest = getPokemon(localStorage.getItem('pokemon') ?? 'pikachu');
  const pokemonStore = writable(defaultPokemonRequest);
  pokemonStore.subscribe((value) => {
    value.catch(() =>
      localStorage.setItem(
        POKEMON_STORAGE_KEY,
        localStorage.getItem(PREVIOUS_POKEMON_STORAGE_KEY)
      )
    );
  });
</script>

<main class="flex min-h-screen items-center justify-center">
  <section>
    {#await $pokemonStore}
      <Loading />
    {:then pokemon}
      <Card
        {pokemon}
        on:change={(event) => {
          const value = event.detail.value.trim().toLowerCase();

          localStorage.setItem(
            PREVIOUS_POKEMON_STORAGE_KEY,
            localStorage.getItem(POKEMON_STORAGE_KEY)
          );
          localStorage.setItem(POKEMON_STORAGE_KEY, value);

          pokemonStore.update(() => getPokemon(value));
        }}
      />
    {:catch error}
      <div class="flex flex-col items-center space-y-4">
        <p class="text-red-500">{error}</p>
        <button
          class="rounded-lg bg-slate-100 px-3 py-2 leading-none text-neutral-900"
          on:click={() => window.location.reload()}>{`<<< Back`}</button
        >
      </div>
    {/await}
  </section>
</main>
