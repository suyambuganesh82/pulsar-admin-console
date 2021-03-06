<!--
  Copyright 2021 DataStax, Inc. 
  
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  
      http://www.apache.org/licenses/LICENSE-2.0
  
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  
 -->

<script>
import VuesticTimelineSeparator from './VuesticTimelineSeparator.vue'

export const $root = 'vuestic-timeline-item'

export default {
  name: $root,
  props: {
    vertical: Boolean,
    active: Boolean,
    activePrevious: Boolean,
    activeNext: Boolean,
    isFirst: Boolean,
    isLast: Boolean,
    inverted: Boolean,
  },
  render (createElement) {
    const props = {
      vertical: this.vertical,
      active: this.active,
      activePrevious: this.activePrevious,
      activeNext: this.activeNext,
    }

    const children = [
      createElement(
        VuesticTimelineSeparator,
        {
          props,
        },
      ),
    ]

    const before = this.inverted ? this.$slots.after : this.$slots.before
    if (before) {
      children.unshift(
        createElement(
          'div',
          {
            class: `${$root}__before`,
            props,
          },
          before,
        ),
      )
    }

    const after = this.inverted ? this.$slots.before : this.$slots.after
    if (after) {
      children.push(
        createElement(
          'div',
          {
            class: `${$root}__after`,
            props,
          },
          after,
        ),
      )
    }

    return createElement(
      'div',
      {
        class: {
          [$root]: true,
          [`${$root}--vertical`]: this.vertical,
          [`${$root}--is-first`]: this.isFirst,
          [`${$root}--is-last`]: this.isLast,
        },
      },
      children,
    )
  },
}
</script>

<style lang="scss">
@import '../../vuestic-sass/resources/resources';

.vuestic-timeline-item {
  display: flex;
  flex-direction: column;
  &__before, &__after {
    flex: 1;
  }
  &--vertical {
    .vuestic-timeline-item__before,
    .vuestic-timeline-item__after {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    .vuestic-timeline-item__before {
      padding-right: 1rem;
    }
    .vuestic-timeline-item__after {
      padding-left: 1rem;
    }
  }
  #{&}__before #{&}__text {
    float: right;
  }
  &:not(&--vertical) {
    .vuestic-timeline-item__before,
    .vuestic-timeline-item__after {
      padding-right: 1rem;
      padding-left: 1rem;
    }
    .vuestic-timeline-item__before {
      padding-bottom: 1rem;
    }
    .vuestic-timeline-item__after {
      padding-top: 1rem;
    }
  }
  &--vertical {
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
  }
  &__title {
    text-align: center;
    color: $brand-primary;
    font-weight: 700;
    font-size: $font-size-mini;
    text-transform: uppercase;
  }
  &__description {
    text-align: center;
  }
  &__text {
    line-height: 1;
  }
}
</style>
