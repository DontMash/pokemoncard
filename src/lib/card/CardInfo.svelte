<script lang="ts">
  import type { Pokemon } from '../types/pokemon-api';

  export let pokemon: Pokemon;
</script>

<ul
  class="mt-2 flex justify-center space-x-1 rounded-md border border-neutral-300 bg-neutral-200 py-0.5 px-8 text-[0.6rem] leading-none shadow-sm"
>
  <li>
    NO. {String(pokemon.id).padStart(4, '0')}
  </li>
  <li>
    HT: {(pokemon.height * 0.1).toFixed(1)}m
  </li>
  <li>
    WT: {(pokemon.weight * 0.1).toFixed(1)}kg
  </li>
</ul>
