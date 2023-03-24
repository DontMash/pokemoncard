<script lang="ts">
  import Card from './lib/card/Card.svelte';
  import RandomIcon from './lib/icons/RandomIcon.svelte';
  import Loading from './lib/Loading.svelte';

  import { writable } from 'svelte/store';
  import { getPokemon } from './lib/types/pokemon-api.service';

  const POKEMON_STORAGE_KEY = 'pokemon';
  const PREVIOUS_POKEMON_STORAGE_KEY = 'previous-pokemon';
  const MAX_POKEMON_INDEX = 1010;

  const getRandomPokemonInput = (): string =>
    Math.round(Math.random() * (MAX_POKEMON_INDEX - 1) + 1).toString();

  const defaultPokemonName =
    localStorage.getItem(POKEMON_STORAGE_KEY) ?? getRandomPokemonInput();
  const defaultPokemonRequest = getPokemon(defaultPokemonName);
  const pokemonStore = writable(defaultPokemonRequest);
  pokemonStore.subscribe((request) => {
    request.then((pokemon) => {
      localStorage.setItem(POKEMON_STORAGE_KEY, pokemon.name);
    });
  });
</script>

<main class="flex min-h-screen items-center justify-center">
  <section class="relative">
    {#await $pokemonStore}
      <Loading />
    {:then pokemon}
      <button
        class="absolute top-0 left-[0.8rem] block h-10 w-10 -translate-y-2 rounded-t-lg bg-yellow-400 p-1 transition-transform hover:-translate-y-[calc(100%_-_4px)]"
        on:click={() => pokemonStore.update(() => getPokemon(getRandomPokemonInput()))}
      >
        <RandomIcon />
      </button>
      <Card
        {pokemon}
        on:change={(event) => {
          const value = event.detail.value.trim().toLowerCase();

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
