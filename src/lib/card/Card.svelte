<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Pokemon } from '../types/pokemon-api';
  import { Type } from '../types/pokemon-api';
  import CardFooter from './CardFooter.svelte';
  import CardHeader from './CardHeader.svelte';
  import CardInfo from './CardInfo.svelte';
  import CardMoves from './CardMoves.svelte';

  export let pokemon: Pokemon;
  $: mainType = pokemon.types[0].type.name;

  const dispatch = createEventDispatcher();
  const colorVariants: Record<Type, string> = {
    [Type.Normal]: 'bg-zinc-300',
    [Type.Fighting]: 'bg-rose-400',
    [Type.Flying]: 'bg-sky-200',
    [Type.Poison]: 'bg-violet-300',
    [Type.Ground]: 'bg-orange-300',
    [Type.Rock]: 'bg-stone-300',
    [Type.Bug]: 'bg-lime-300',
    [Type.Ghost]: 'bg-indigo-300',
    [Type.Steel]: 'bg-slate-400',
    [Type.Fire]: 'bg-red-400',
    [Type.Water]: 'bg-blue-300',
    [Type.Grass]: 'bg-green-400',
    [Type.Electric]: 'bg-yellow-300',
    [Type.Psychic]: 'bg-rose-300',
    [Type.Ice]: 'bg-emerald-200',
    [Type.Dragon]: 'bg-blue-400',
    [Type.Dark]: 'bg-stone-500',
    [Type.Fairy]: 'bg-pink-300',
  };
</script>

<figure
  class={`aspect-w-[28] aspect-h-[39] w-80 rounded-2xl border-[0.8rem] border-yellow-400 ${colorVariants[mainType]} text-neutral-900 shadow-2xl`}
>
  <div class="flex flex-col px-3 py-2">
    <CardHeader
      {pokemon}
      on:change={(event) => dispatch('change', { value: event.detail.value })}
    />
    <picture
      class="aspect-w-3 aspect-h-2 block overflow-hidden rounded-lg bg-yellow-400 shadow-sm"
    >
      <img
        class="object-contain flex justify-center items-center"
        src={pokemon.sprites.other['official-artwork'].front_default}
        width="512"
        height="512"
        alt="Artwork"
      />
    </picture>
    <CardInfo {pokemon} />
    <CardMoves {pokemon} />
    <CardFooter {pokemon} />
    <div
      class="absolute -bottom-3 left-0 right-0 flex w-full justify-center text-[0.5rem] font-light"
    >
      <span>Created by <a class="font-medium" href="https://www.soren.codes" rel="link" target="_blank">@DontMash</a></span>
    </div>
  </div>
</figure>
