<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import PokemonType from '../icons/PokemonType.svelte';
  import type { Pokemon } from '../types/pokemon-api';
  import { getSpecies } from '../types/pokemon-api.service';

  export let pokemon: Pokemon;
  $: hp = pokemon.stats.find((entry) => entry.stat.name === 'hp');

  const dispatch = createEventDispatcher();
  const INPUT_NAME = 'pokemon-name';

  const onChangeName = (event: Event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget as HTMLFormElement);
    dispatch('change', { value: formData.get(INPUT_NAME) });
  };
</script>

<header class="mb-2 flex h-5 items-end space-x-1">
  {#await getSpecies(pokemon.id) then species}
    {@const name = species.names.find((entry) => entry.language.name === 'en')}
    <div>
      <h4 class="sr-only">{name.name}</h4>
      <form on:submit={(event) => onChangeName(event)}>
        <input
          class="block w-full grow bg-transparent text-xl font-medium leading-none outline-none placeholder:text-neutral-900"
          name={INPUT_NAME}
          placeholder={name.name}
        />
      </form>
    </div>
  {/await}

  <span class="flex items-end">
    <small class="relative bottom-0.5 text-[0.6rem] font-medium leading-none">
      {hp.stat.name.toUpperCase()}
    </small>
    <b class="text-lg font-medium leading-none">{hp.base_stat}</b>
  </span>

  <div>
    <PokemonType name={pokemon.types[0].type.name} />
  </div>
</header>
