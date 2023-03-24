<script lang="ts">
  import { Type } from './types/pokemon-api';

  import Dark from './icons/types/DarkIcon.svelte';
  import Electric from './icons/types/ElectricIcon.svelte';
  import Fairy from './icons/types/FairyIcon.svelte';
  import Fighting from './icons/types/FightingIcon.svelte';
  import Ground from './icons/types/GroundIcon.svelte';
  import Ice from './icons/types/IceIcon.svelte';
  import Normal from './icons/types/NormalIcon.svelte';
  import Poison from './icons/types/PoisonIcon.svelte';
  import Psychic from './icons/types/PsychicIcon.svelte';
  import Rock from './icons/types/RockIcon.svelte';
  import Steel from './icons/types/SteelIcon.svelte';
  import Water from './icons/types/WaterIcon.svelte';

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
