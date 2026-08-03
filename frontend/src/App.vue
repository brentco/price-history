<script setup lang="ts">
import DefaultErrorDialog from "./components/dialogs/DefaultErrorDialog.vue";
import {nextTick, onMounted, useTemplateRef} from "vue";

const errorDialogRef = useTemplateRef<typeof DefaultErrorDialog>("errorDialogRef");

onMounted(() => {
  nextTick(() => {
    errorDialogRef.value?.open();
  })
});
</script>

<template>
  <div>
    <DefaultErrorDialog id="defaultErrorDialog" ref="errorDialogRef" error="This is an error" title="An unknown error occurred!" message="Something went wrong that was unexpected! If this keeps happening, please report this issue using the button below."/>
  </div>
</template>
