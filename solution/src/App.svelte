<script lang="ts">
  import "./app.css";
  import router from "page";
  import Home from "./pages/Home.svelte";
  import Destination from "./pages/Destination.svelte";
  import Crew from "./pages/Crew.svelte";
  import Technology from "./pages/Technology.svelte";
  import Navbar from "./components/shared/Navbar.svelte";
  import MaxContainer from "./components/shared/MaxContainer.svelte";
  import { onMount, onDestroy } from "svelte";
  import { currentPath } from "./store";

  let page: any;

  // Adding Background image based on the page the user's on
  let path =
    window.location.pathname.replace("/", "") === ""
      ? "home"
      : window.location.pathname.replace("/", "");

  function changeBackgroundImage() {
    if (window.innerWidth < 640) {
      document.body.style.backgroundImage = `url('/assets/${path}/background-${path}-mobile.jpg')`;
    } else if (window.innerWidth < 768) {
      document.body.style.backgroundImage = `url('/assets/${path}/background-${path}-tablet.jpg')`;
    } else {
      document.body.style.backgroundImage = `url('/assets/${path}/background-${path}-desktop.jpg')`;
    }
  }

  currentPath.subscribe((value) => {
    path = value.replace("/", "") === "" ? "home" : value.replace("/", "");
    changeBackgroundImage();
  });

  onMount(() => {
    changeBackgroundImage();

    window.addEventListener("resize", changeBackgroundImage);
  });

  onDestroy(() => {
    window.removeEventListener("resize", changeBackgroundImage);
  });

  // Router setup
  router("/", () => (page = Home));
  router("/destination", () => (page = Destination));
  router("/crew", () => (page = Crew));
  router("/technology", () => (page = Technology));

  router.start();
</script>

<div class="w-screen h-screen overflow-hidden">
  <div class="w-full h-full overflow-auto">
    <Navbar />
    <svelte:component this={page} />
  </div>
</div>
