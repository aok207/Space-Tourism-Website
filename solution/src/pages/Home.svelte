<script lang="ts">
  import router from "page";
  import { currentPath } from "../store";
  import MaxContainer from "../components/shared/MaxContainer.svelte";

  function goToDestination() {
    router("/destination");
    currentPath.set("/destination");
  }
</script>

<MaxContainer>
  <div
    class="lg:grid md:flex md:flex-col text-center lg:text-left lg:grid-cols-2 space-y-32 md:space-y-[80px] lg:space-y-[30px] lg:items-center mb-[126px] mt-[240px]"
  >
    <div class="flex flex-col gap-6">
      <h3
        class="text-[18px] md:text-[28px] leading-normal tracking-[4px] uppercase font-barlow-condensed text-lightblue"
      >
        so, you want to travel to
      </h3>
      <h1
        class="uppercase text-[100px] md:text-[144px] font-bellefair leading-normal tracking-normal text-white"
      >
        space
      </h1>

      <p class="text-[18px] leading-7 font-barlow-regular text-lightblue">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
    <div class="lg:justify-self-end">
      <button
        class="uppercase text-darkblue text-[28px] leading-5 font-bellefair rounded-full w-56 h-56 bg-white relative after:absolute after:top-0 after:left-0 after:rounded-full after:w-full after:h-full after:scale-150 after:bg-white after:bg-opacity-10 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:ease-linear after:duration-200"
        on:click={goToDestination}
      >
        Explore
      </button>
    </div>
  </div>
</MaxContainer>
