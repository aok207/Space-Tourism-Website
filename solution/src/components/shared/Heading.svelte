<script lang="ts">
  export let num: number;
  export let title: string;
</script>

<h1 class="font-barlow-condensed text-[16px] md:text-[20px] xl:text-[28px]">
  <b class="text-lightblue opacity-25 tracking-[4.72px]"
    >{num.toString().padStart(2, "0")}</b
  >
  <span class="tracking-[4px] ml-6 uppercase">{title}</span>
</h1>
