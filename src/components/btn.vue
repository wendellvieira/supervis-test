<template>
  <button
    @click="$emit('click', $event)"
    :class="btnClass"
    :disabled="disabled"
  >
    <slot v-if="$slots.icon || icon" name="icon">
      <i class="icon material-icons">{{ icon }}</i>
    </slot>
    <slot v-if="$slots.label || label" name="label">
      <span>{{ label }}</span>
    </slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
    },
    icon: {
      type: String,
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    btnClass() {
      const btnClass = ['btn', `btn-${this.type}`]
      if (this.round) btnClass.push(`btn-round`)
      if (this.$attrs.class) btnClass.push(this.$attrs.class)
      return btnClass.join(' ')
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  height: 40px;
  border-radius: 2px;
  min-width: 130px;
  border: none;
  outline: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: linear 150ms background-color;
  cursor: pointer;

  span {
    font-size: 12px;
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    transition: linear 150ms color;
  }

  .icon {
    font-size: 18px;
    margin-right: 6px;
    transition: linear 150ms color;
  }

  &:disabled {
    background-color: #39363e !important;
    border: 1px solid #57535f !important;
    cursor: no-drop;
    span,
    .icon {
      color: #57535f !important;
    }
  }

  &.btn-primary {
    background-color: #ffef33;
    span,
    .icon {
      color: #39363e;
    }
    &:hover {
      background-color: #fff68d;
      span,
      .icon {
        color: #131215;
      }
    }
    &:active {
      background-color: #f4ce00;
      span,
      .icon {
        color: #131215;
      }
    }
  }

  &.btn-secondary {
    background-color: #56525e;
    span,
    .icon {
      color: #aea9b8;
    }
    &:hover {
      background-color: #aea9b8;
      span,
      .icon {
        color: #e9e5ef;
      }
    }
    &:active {
      background-color: #56525e;
      span,
      .icon {
        color: #aea9b8;
      }
    }
  }

  &.btn-round {
    min-width: 34px;
    height: 34px;
    border-radius: 34px;
    background-color: transparent;

    &:hover,
    &:active {
      background-color: #39363e;
      .icon {
        color: #fff;
      }
    }

    .icon {
      margin: 0;
      color: #fff;
    }
  }
}
</style>
