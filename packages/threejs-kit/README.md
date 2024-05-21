# `threejs-kit`

> TODO: description

## 使用方法

基本使用：
```typescript
import { InitScene } from '@cathats/threejs-kit';

useEffect(() => {
    const threekit = new InitScene(
        '#thressjs-transform-demo1',
        {
            backgroundColor: 0xffffff,
            fogColor: 0xffffff,
            statEnabled: true, // 是否展示统计信息
            orbitControlsEnabled: true, // 是否使用相机控件
        }
    )
    
    threekit.controller?.update() // 首次使用需要更新一次
    threekit.animate(() => {}) // 动画循环 -- 必须手动调用一次
}, [])
```

## 参数说明

`InitScene` 方法第一个参数为 canvas 的 id 或者获取到的 Element 节点，第二个参数为配置项，具体如下：

| 参数              | 说明 | 类型       | 默认值 | 备注                                           |
|-----------------| --- |----------| --- |----------------------------------------------|
| backgroundColor | 场景的背景色 | `number` | `0x000000` | 可选，也可以指定其他颜色，如指定贴图，需要 threekit.scene 手动设置    |
| fogColor        | 场景迷雾颜色 | `number` | `0xffffff` | 可选，也可以指定其他颜色, 详细配置可以使用 threekit.scene.fog 设置 |
| statEnabled     | 场景是否展示统计信息 | `boolean` | `false` | 可选，默认不展示                              |
| orbitControlsEnabled | 是否使用个相机控件 | `boolean` | `false` | 可选，默认不展示                              |

## 方法说明

`InitScene` 实例化后，会返回一个包含以下方法的实例：

| 方法名             | 说明 | 参数                      | 返回值 |
|-------------------| --- |-------------------------| --- |
| animate            | 动画循环                    | `callback: Function` | `void` |
| scene              | 获取场景实例                  | `void` | `THREE.Scene` |
| camera             | 获取相机实例                  | `void` | `THREE.PerspectiveCamera` |
| renderer          | 获取渲染器实例                  | `void` | `THREE.WebGLRenderer` |
| render              | 渲染场景                    | `void` | `void` |
| addObject          | 添加一个模型到场景中           | `object: THREE.Object3D` | `void` |
| removeObject      | 从场景中移除一个模型           | `object: THREE.Object3D` | `void` |
| getObjectByName   | 通过名称获取场景中的模型 | `name: string` | `THREE.Object3D` |
| getObjectsByName | 通过名称获取场景中的模型 | `name: string` | `THREE.Object3D[]` |
| getObjectsByType | 通过类型获取场景中的模型 | `type: string` | `THREE.Object3D[]` |
| getObjects        | 获取场景中的所有模型     | `void` | `THREE.Object3D[]` |
| getObjectsByGroup | 通过组名获取场景中的模型 | `groupName: string` | `THREE.Object3D[]` |
| getObjectsByTag  | 通过标签获取场景中的模型 | `tag: string` | `THREE.Object3D[]` |
| getObjectsByUuid | 通过UUID获取场景中的模型 | `uuid: string` | `THREE.Object3D` |
| getObjectsByUserData | 通过用户数据获取场景中的模型 | `key: string, value: any` | `THREE.Object3D[]` |
| getObjectsByProperty | 通过属性获取场景中的模型 | `key: string, value: any` | `THREE.Object3D[]` |
| getObjectsByMaterial | 通过材质获取场景中的模型 | `material: THREE.Material` | `THREE.Object3D[]` |
| getObjectsByGeometry | 通过几何体获取场景中的模型 | `geometry: THREE.Geometry` | `THREE.Object3D[]` |
| getObjectsBySkinnedMesh | 通过蒙皮网格获取场景中的模型 | `skinnedMesh: THREE.SkinnedMesh` | `THREE.Object3D[]` |
| getObjectsByCamera | 通过相机获取场景中的模型 | `camera: THREE.Camera` | `THREE.Object3D[]` |
| getObjectsByLight | 通过光源获取场景中的模型 | `light: THREE.Light` | `THREE.Object3D[]` |
| getObjectsByHelper | 通过辅助器获取场景中的模型 | `helper: THREE.Object3D` | `THREE.Object3D[]` |
| getObjectsByLensFlare | 通过镜头耀斑获取场景中的模型 | `lensFlare: THREE.LensFlare` | `THREE.Object3D[]` |
| getObjectsBySprite | 通过精灵获取场景中的模型 | `sprite: THREE.Sprite` | `THREE.Object3D[]` |
| getObjectsByPoints | 通过点云获取场景中的模型 | `points: THREE.Points` | `THREE.Object3D[]` |
| getObjectsByLine | 通过线条获取场景中的模型 | `line: THREE.Line` | `THREE.Object3D[]` |
| getObjectsByLineLoop | 通过线圈获取场景中的模型 | `lineLoop: THREE.LineLoop` | `THREE.Object3D[]` |
| getObjectsByLineSegments | 通过线段获取场景中的模型 | `lineSegments: THREE.LineSegments` | `THREE.Object3D[]` |
| getObjectsByMesh | 通过网格获取场景中的模型 | `mesh: THREE.Mesh` | `THREE.Object3D[]` |