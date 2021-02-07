<template>
  <v-sheet
    v-bind="$attrs"
    :color="color"
    :dark="dark"
    :elevation="elevation"
    :height="height"
    :light="light"
    :max-height="maxHeight"
    :max-width="maxWidth"
    :min-height="minHeight"
    :min-width="minWidth"
    :outlined="outlined"
    :rounded="rounded"
    :shaped="shaped"
    :tag="tag"
    :tile="tile"
    :width="width"
  >
    <slot></slot>
  </v-sheet>
</template>

<script>
export default {
  name: "BaseSheet",

  inheritAttrs: false,

  props: {
    /** @description Applies specified color to the control. */
    color: {
      type: String,
      default: undefined
    },

    /** @description Applies the dark theme variant to the component. */
    dark: {
      type: Boolean,
      default: false
    },

    /** @description Designates an elevation applied to the component between 0 and 24 */
    elevation: {
      type: [Number, String],
      default: undefined
    },

    /** @description Sets the height for the component. */
    height: {
      type: [Number, String],
      default: undefined
    },

    /** @description Applies the light theme variant to the component. */
    light: {
      type: Boolean,
      default: false
    },

    /** @description Sets the maximum height for the component. */
    maxHeight: {
      type: [Number, String],
      default: undefined
    },

    /** @description Sets the maximum width for the component. */
    maxWidth: {
      type: [Number, String],
      default: undefined
    },

    /** @description Sets the minimum height for the component. */
    minHeight: {
      type: [Number, String],
      default: undefined
    },

    /** @description Sets the minimum width for the component. */
    minWidth: {
      type: [Number, String],
      default: undefined
    },

    /** @description Applies the v-ripple directive. */
    outlined: {
      type: Boolean,
      default: false
    },

    /** @description Applies a large border radius on the button. */
    rounded: {
      type: Boolean,
      default: false
    },

    /** @description Applies a large border radius on the top left and bottom right of the card. */
    shaped: {
      type: Boolean,
      default: false
    },

    /** @description Specify a custom tag used on the root element. */
    tag: {
      type: String,
      default: "div"
    },

    /** @description Removes the component's border-radius. */
    tile: {
      type: Boolean,
      default: false
    },

    /** @description Sets the width for the component. */
    width: {
      type: [Number, String],
      default: undefined
    }
  }
};
</script>

<style></style>
