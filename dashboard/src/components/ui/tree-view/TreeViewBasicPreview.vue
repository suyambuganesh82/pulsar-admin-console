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

<template>
  <vuestic-tree-root>
    <vuestic-tree-category label="Electronics">
      <vuestic-tree-node>Cellphones</vuestic-tree-node>
      <vuestic-tree-node>Camera Body Kits</vuestic-tree-node>
      <vuestic-tree-node>External HDDs</vuestic-tree-node>
    </vuestic-tree-category>
    <vuestic-tree-category isOpen label="Products">
      <vuestic-tree-category label="Cables">
        <vuestic-tree-node>Audio</vuestic-tree-node>
        <vuestic-tree-node>Video</vuestic-tree-node>
        <vuestic-tree-node>Optical</vuestic-tree-node>
      </vuestic-tree-category>
      <vuestic-tree-node>Monitors</vuestic-tree-node>
      <vuestic-tree-node>Keyboards</vuestic-tree-node>
    </vuestic-tree-category>
    <vuestic-tree-category label="Apparel">
      <vuestic-tree-node>Jackets</vuestic-tree-node>
      <vuestic-tree-node>Pants</vuestic-tree-node>
      <vuestic-tree-node>Skirts</vuestic-tree-node>
    </vuestic-tree-category>
  </vuestic-tree-root>
</template>

<script>
export default {
  name: 'tree-view-basic-preview',
}
</script>
