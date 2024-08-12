<script lang="ts">
  import Heading from "../components/shared/Heading.svelte";
  import data from "../data/data.json";
  import MaxContainer from "../components/shared/MaxContainer.svelte";

  type Crew = {
    name: string;
    images: {
      png: string;
      webp: string;
    };
    role: string;
    bio: string;
  };

  const crews: Crew[] = data.crew;
  let currentMember: Crew = crews[0];
  let currentMemberIndex: number = 0;

  function switchCrewMember(i: number) {
    currentMember = crews[i];
    currentMemberIndex = i;
  }
</script>

<MaxContainer>
  <div class="mb-5 mt-12 text-white">
    <Heading num={2} title={"Meet your crew"} />
    <div
      class="relative py-6 mt-6 xl:mt-0 xl:py-[80px] px-0 xl:px-[30px] grid grid-cols-1 xl:grid-cols-2 gap-16 justify-center items-center"
    >
      <div
        class="h-full flex flex-col max-w-[540px] text-center justify-center items-center xl:text-left xl:justify-between xl:items-start place-self-center xl:place-self-start pt-2 xl:pt-[122px]"
      >
        <div class="flex flex-col gap-3">
          <div class="flex flex-col space-y-4 font-bellefair">
            <h3
              class="uppercase text-[18px] md:text-[24px] xl:text-[32px] text-lightblue opacity-50"
            >
              {currentMember.role}
            </h3>
            <h2 class="text-[24px] md:text-[40px] xl:text-[56px] text-nowrap">
              {currentMember.name.toUpperCase()}
            </h2>
          </div>

          <p
            class="font-barlow-regular text-[15px] md:text-[16px] xl:text-lg leading-relaxed text-lightblue"
          >
            {currentMember.bio}
          </p>
        </div>

        <div class="flex gap-4 xl:gap-10 items-center mt-20 xl:mt-0">
          {#each crews as _, index}
            <button
              class={`w-[10px] h-[10px] xl:w-[15px] xl:h-[15px] rounded-full hover:bg-white hover:opacity-100 transition-color duration-300 ${index === currentMemberIndex ? "bg-white" : "bg-lightblue opacity-50"}`}
              on:click={() => switchCrewMember(index)}
            />
          {/each}
        </div>
      </div>
      <div
        class="w-[95%] md:w-3/4 xl:w-[90%] place-self-center bg-gradient-to-b from-black crew-image-container"
        style={`mask-image: url('${currentMember.images.png}'); -webkit-mask-image: url('${currentMember.images.png}');`}
      >
        <img
          src={currentMember.images.png}
          alt={currentMember.images.png}
          loading="lazy"
          class="w-full h-full"
          id="crew-image"
        />
      </div>
    </div>
  </div>
</MaxContainer>

<style>
  .crew-image-container {
    mask-size: cover;
    mask-repeat: no-repeat;
    mask-position: center;
  }

  #crew-image {
    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1) 80%,
      rgba(0, 0, 0, 0) 100%
    );
    mask-image: linear-gradient(
      to bottom,
      white 80%,
      rgba(0, 0, 0, 0) 100%
    ); /* https://stackoverflow.com/a/23781638 */
  }
</style>
