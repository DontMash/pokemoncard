<script lang="ts">
  import PokemonType from '../icons/PokemonType.svelte';
  import type { Pokemon } from '../types/pokemon-api';
  import { getMove, getPokemonMoves } from '../types/pokemon-api.service';

  export let pokemon: Pokemon;
</script>

<ul class="flex grow flex-col justify-center divide-y-2 divide-neutral-900">
  {#each getPokemonMoves(pokemon) as entry}
    {#await getMove(entry.move.name) then move}
      {@const name = move.names.find((entry) => entry.language.name === 'en')}
      <li class="space-y-1 py-3 text-lg leading-none">
        <div class="flex text-center font-medium">
          <div>
            <PokemonType name={move.type.name} />
          </div>
          <p class="grow">
            {name.name}
          </p>
          <span class="w-8 text-right">
            {move.power ?? ''}
          </span>
        </div>
        {#if move.flavor_text_entries.length > 0}
          <small
            class="block overflow-hidden text-ellipsis whitespace-nowrap text-xs font-light"
          >
            {move.flavor_text_entries.find((text) => text.language.name === 'en')
              .flavor_text}
          </small>
        {/if}
      </li>
    {/await}
  {/each}
</ul>
