<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { currentPath } from "../../store";
  import NavLink from "./NavLink.svelte";

  let sidebarOpened = false;
  let url = window.location.pathname;

  currentPath.subscribe((value) => {
    url = value;
  });

  const links = [
    { url: "/", label: "Home", number: "00" },
    { url: "/destination", label: "Destination", number: "01" },
    { url: "/crew", label: "Crew", number: "02" },
    { url: "/technology", label: "Technology", number: "03" },
  ];

  function handleClick(e: MouseEvent) {
    console.log(e.target);
    if (e.target && (e.target as HTMLElement).id === "hamburger-btn") {
      sidebarOpened = !sidebarOpened;
    } else {
      sidebarOpened = false;
    }
  }

  onMount(() => {
    document.addEventListener("click", handleClick);
  });

  onDestroy(() => {
    document.removeEventListener("click", handleClick);
  });
</script>

<nav
  class="flex items-center md:space-x-[60px] lg:-space-x-6 justify-between w-full z-30 mt-2 md:mt-[28px]"
>
  <div class="flex gap-0 md:gap-16 items-center flex-shrink-0">
    <a href="/" class="ml-6 lg:ml-[60px] md:ml-16">
      <img src="/assets/shared/logo.svg" alt="logo" width="48" height="48" />
    </a>

    <div
      class="bg-white h-[1px] lg:block lg:w-[400px] xl:w-[560px] hidden opacity-30 z-20"
    />
  </div>
  <!-- Desktop and tablet version -->
  <div
    class="h-24 w-full text-white font-barlow-condensed text-[16px] leading-5 tracking-[2px] gap-[45px] justify-center items-center bg-white bg-opacity-5 backdrop-blur-md z-10 pl-20 hidden md:flex"
  >
    {#each links as link}
      <NavLink
        url={link.url}
        handleClick={() => currentPath.set(link.url)}
        activeCondition={url === link.url}
        label={link.label}
        num={link.number}
      />
    {/each}
  </div>

  <!-- Mobile version -->
  <button class="mr-6 block md:hidden" type="button"
    ><img
      src="/assets/shared/icon-hamburger.svg"
      alt="hamburger icon"
      id="hamburger-btn"
    /></button
  >
</nav>
<div
  class={`w-[254px] bg-white bg-opacity-5 backdrop-blur-md absolute top-0 h-screen left-[100%] z-50 transition-transform duration-300 ease-in-out ${sidebarOpened ? "open" : ""}`}
>
  <div class="flex w-full justify-end mb-12">
    <button
      type="button"
      on:click={() => (sidebarOpened = false)}
      class="mt-8 mr-[26px]"
      ><img src="/assets/shared/icon-close.svg" alt="close sidebar" />
    </button>
  </div>

  <div class="flex flex-col gap-[50px] text-white pl-5">
    {#each links as link}
      <a
        href={link.url}
        on:click={() => currentPath.set(link.url)}
        class={`w-full relative flex justify-start items-center after:h-full after:w-1 after:absolute after:bg-white after:top-0 after:right-0 after:transition-opacity ${url !== link.url ? "after:hover:opacity-100 after:opacity-0" : "after:opacity-100"}`}
      >
        <div class="flex gap-2">
          <b>{link.number}</b>
          {link.label}
        </div>
      </a>
    {/each}
  </div>
</div>

<style scoped>
  .open {
    transform: translateX(-254px);
  }
</style>
