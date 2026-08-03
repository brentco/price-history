<script setup lang="ts">
import {computed, type Ref, useTemplateRef} from "vue";
import {isDesktop} from "../../utilities/platform.ts";
import {open} from '@tauri-apps/plugin-shell';

defineProps({
  id: {type: String, required: true},
  title: {type: String, required: false},
  message: {type: String, required: false},
  error: {required: true}
})

const dialogRef = useTemplateRef<HTMLDialogElement>("dialogRef");

defineExpose({
  open: () => dialogRef.value?.showModal(),
  close: () => dialogRef.value?.close(),
})

const submitTicketUrl: Ref<string> = computed(() => {
  return "https://google.com";
});
</script>

<template>
  <dialog :id="id" ref="dialogRef" class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <slot name="default">
          <div class="flex content-baseline align-baseline items-center gap-1">

        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round"
        d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/> </svg>
        </span>
            <h3 class="text-lg font-bold">{{ title || 'Untitled' }}</h3>
          </div>
          <p class="py-4">{{ message || '' }}</p>
          <div class="modal-action">
            <form method="dialog" class="gap-2 flex">
              <button class="btn">Close</button>
              <div class="aura aura-rainbow">
                <a v-if="isDesktop" @click.prevent="open(submitTicketUrl); dialogRef?.close()" class="btn accent-primary">Report this
                  issue</a>
                <a v-else :href="submitTicketUrl" target="_blank" class="btn accent-primary"
                   @click="dialogRef?.close()">Report this issue</a>
              </div>
            </form>
          </div>
        </slot>
      </div>
  </dialog>
</template>

<style scoped>

</style>