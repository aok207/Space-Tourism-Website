<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import Heading from "../components/shared/Heading.svelte";
  import NavLink from "../components/shared/NavLink.svelte";
  import data from "../data/data.json";
  import MaxContainer from "../components/shared/MaxContainer.svelte";

  type Destination = {
    name: string;
    images: {
      png: string;
      webp: string;
    };
    description: string;
    distance: string;
    travel: string;
  };

  let destinations: Destination[] = data.destinations;
  let currentTab: Destination = destinations[0];

  // Function to check the hash and update the current tab when the hash changes.
  function checkHash() {
    const hash = location.hash.replace("#", "");

    if (
      hash &&
      destinations.some(
        (dest) => dest.name.toLowerCase() === hash.toLowerCase()
      )
    ) {
      currentTab = destinations.find(
        (dest) => dest.name.toLowerCase() === hash.toLowerCase()
      ) as Destination;
    }
    location.hash = currentTab.name;
  }

  onMount(() => {
    checkHash();

    window.addEventListener("hashchange", checkHash);
  });

  onDestroy(() => {
    window.removeEventListener("hashchange", checkHash);
  });

  function switchTab(index: number) {
    currentTab = destinations[index];
    location.hash = currentTab.name;
  }
</script>

<MaxContainer>
  <div class="mb-[126px] mt-12 text-white">
    <Heading num={1} title={"Pick your destination"} />
    <div
      class="py-6 mt-6 xl:mt-0 xl:py-[127px] px-0 xl:px-[30px] grid grid-cols-1 xl:grid-cols-2 gap-16 justify-center items-center"
    >
      <img
        src={currentTab.images.webp}
        alt={currentTab.name}
        loading="lazy"
        class="w-[150px] h-[150px] md:w-[300px] md:h-[300px] xl:w-[450px] xl:h-[450px] place-self-center xl:place-self-start"
      />

      <div
        class="flex flex-col gap-10 max-w-[540px] text-center justify-center xl:text-left xl:justify-normal place-self-center xl:place-self-start"
      >
        <!-- Switching tab -->
        <div
          class="flex gap-8 items-center justify-center xl:justify-normal font-barlow-condensed text-[16px] tracking-[2px] h-8"
        >
          {#each destinations as dest, index}
            <NavLink
              url={`#${dest.name}`}
              handleClick={() => switchTab(index)}
              activeCondition={currentTab.name === dest.name}
              label={dest.name.toUpperCase()}
            />
          {/each}
        </div>

        <h2 class="font-bellefair text-8xl">
          {currentTab.name.toUpperCase()}
        </h2>

        <p class="font-barlow-regular text-lg leading-relaxed text-lightblue">
          {currentTab.description}
        </p>

        <hr class="opacity-25" />

        <div class="grid w-full grid-cols-2 gap-6">
          <div class="flex flex-col gap-3 justify-start">
            <span class="uppercase text-sm tracking-[2px] text-lightblue">
              Avg. Distance
            </span>
            <span class="text-[28px] font-bellefair text-white">
              {currentTab.distance}
            </span>
          </div>

          <div class="flex flex-col gap-3 justify-start">
            <span class="uppercase text-sm tracking-[2px] text-lightblue">
              Est. travel time
            </span>
            <span class="text-[28px] font-bellefair text-white">
              {currentTab.travel}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</MaxContainer>
