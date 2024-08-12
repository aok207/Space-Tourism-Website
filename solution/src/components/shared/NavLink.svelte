<script lang="ts">
  export let url: string;
  export let handleClick: () => void;
  export let activeCondition: boolean;
  export let num: string | number | null = null;
  export let label: string;
</script>

<a
  href={url}
  on:click={handleClick}
  class={`h-full relative flex justify-center items-center after:w-full after:h-1 after:absolute after:bg-white after:bottom-0 after:transition-opacity ${!activeCondition ? "after:hover:opacity-100 after:opacity-0 text-lightblue" : "after:opacity-100 text-white"}`}
>
  <div>
    {#if num !== null}
      <b>{typeof num === "string" ? num : num.toString().padStart(2, "0")}</b>
    {/if}
    {label}
  </div>
</a>
