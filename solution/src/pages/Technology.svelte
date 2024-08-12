<script lang="ts">
  import Heading from "../components/shared/Heading.svelte";
  import data from "../data/data.json";
  import { onMount, onDestroy } from "svelte";

  let technologies = data.technology;
  let currentTech = technologies[0];
  let currentTechIndex = 0;

  function handleImageSize() {
    const imageEle = document.querySelector(
      "#tech-image"
    ) as HTMLImageElement | null;

    if (window.innerWidth < 1280) {
      imageEle!.src = currentTech.images.landscape;
    } else {
      imageEle!.src = currentTech.images.portrait;
    }
  }

  onMount(() => {
    handleImageSize();
    window.addEventListener("resize", handleImageSize);
  });

  onDestroy(() => {
    window.removeEventListener("resize", handleImageSize);
  });

  function handleClick(index: number) {
    currentTechIndex = index;
    currentTech = technologies[index];
  }
</script>

<div class="text-white m-0 xl:ml-[100px] xl:my-12">
  <div class="px-8 pt-6 xl:p-0">
    <Heading num={3} title={"Space Launch 101"} />
  </div>
  <div
    class="flex flex-col-reverse xl:grid xl:grid-cols-2 gap-8 my-6 py-[68px]"
  >
    <div
      class="font-bellefair mx-6 md:mx-40 xl:m-0 flex flex-col xl:flex-row gap-16 items-center"
    >
      <div class="flex flex-row xl:flex-col gap-8 font-bellefair">
        {#each technologies as _, index}
          <button
            class={`text-[18px] w-10 h-10 md:text-[24px] md:w-14 md:h-14 xl:text-[32px] xl:w-20 xl:h-20 border border-white rounded-full transition-colors duration-300 hover:text-darkblue hover:bg-white ${index === currentTechIndex ? "bg-white text-darkblue" : "bg-transparent text-white"}`}
            on:click={() => handleClick(index)}>{index + 1}</button
          >
        {/each}
      </div>
      <div class="text-center xl:text-left">
        <h3
          class="uppercase text-[18px] md:text-[24px] xl:text-[32px] text-lightblue opacity-50"
        >
          The terminology...
        </h3>
        <h2 class="text-[24px] md:text-[40px] xl:text-[56px] text-nowrap">
          {currentTech.name.toUpperCase()}
        </h2>
        <p
          class="font-barlow-regular text-[15px] md:text-[16px] xl:text-lg leading-relaxed text-lightblue"
        >
          {currentTech.description}
        </p>
      </div>
    </div>
    <img
      src={window.innerWidth < 1280
        ? currentTech.images.landscape
        : currentTech.images.portrait}
      alt={currentTech.name}
      id="tech-image"
      loading="lazy"
      class="w-full"
    />
  </div>
</div>
