<script lang="ts">
  import type { Pokemon } from '../types/pokemon-api';

  export let pokemon: Pokemon;
  $: attack = pokemon.stats.find((entry) => entry.stat.name === 'attack');
  $: defense = pokemon.stats.find((entry) => entry.stat.name === 'defense');
  $: speed = pokemon.stats.find((entry) => entry.stat.name === 'speed');
</script>

<div class="border-t-2 border-neutral-900 text-center text-xs">
  <ul class="grid grid-cols-3">
    <li class="flex flex-col justify-center">
      <span>attack</span>
      <span>{attack.base_stat}</span>
    </li>
    <li class="flex flex-col justify-center">
      <span>defense</span>
      <span>{defense.base_stat}</span>
    </li>
    <li class="flex flex-col justify-center">
      <span>speed</span>
      <span>{speed.base_stat}</span>
    </li>
  </ul>
</div>
