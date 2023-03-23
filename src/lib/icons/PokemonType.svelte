<script lang="ts">
  import { Type } from '../types/pokemon-api';

  import Dark from './types/Dark.svelte';
  import Electric from './types/Electric.svelte';
  import Fairy from './types/Fairy.svelte';
  import Fighting from './types/Fighting.svelte';
  import Ground from './types/Ground.svelte';
  import Ice from './types/Ice.svelte';
  import Normal from './types/Normal.svelte';
  import Poison from './types/Poison.svelte';
  import Psychic from './types/Psychic.svelte';
  import Rock from './types/Rock.svelte';
  import Steel from './types/Steel.svelte';
  import Water from './types/Water.svelte';

  export let name: Type;
</script>

<div class="flex h-5 w-5 items-center justify-center rounded-full text-[0.6rem]">
  {#if name === Type.Normal}
    <Normal />
  {:else if name === Type.Fighting}
    <Fighting />
  {:else if name === Type.Flying}
    N/A
  {:else if name === Type.Poison}
    <Poison />
  {:else if name === Type.Ground}
    <Ground />
  {:else if name === Type.Rock}
    <Rock />
  {:else if name === Type.Bug}
    N/A
  {:else if name === Type.Ghost}
    N/A
  {:else if name === Type.Steel}
    <Steel />
  {:else if name === Type.Fire}
    N/A
  {:else if name === Type.Water}
    <Water />
  {:else if name === Type.Grass}
    N/A
  {:else if name === Type.Electric}
    <Electric />
  {:else if name === Type.Psychic}
    <Psychic />
  {:else if name === Type.Ice}
    <Ice />
  {:else if name === Type.Dragon}
    N/A
  {:else if name === Type.Dark}
    <Dark />
  {:else if name === Type.Fairy}
    <Fairy />
  {/if}
</div>
