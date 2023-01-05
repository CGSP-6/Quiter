# English Version
## How to use github
1. [this is quite useful](https://uoftcoders.github.io/studyGroup/lessons/git/collaboration/lesson/)
   1. [and here is its video](https://www.youtube.com/watch?v=vrftiQcqIYM&ab_channel=UofTCoders)
2. t[his is the offical guide](https://docs.github.com/en/get-started/quickstart/hello-world)
3. [this one is also an interesting video](https://www.youtube.com/watch?v=MnUd31TvBoU&ab_channel=TheNetNinja)
## How to make a web site.
1. [HTML](https://www.w3schools.com/html/default.asp)
2. [CSS](https://www.w3schools.com/css/default.asp)
3. [Java Script](https://www.w3schools.com/js/default.asp)

## How to start coding with python

## How to 

---
# Chinese Version （it's also good if you want to translate them)
## [Web GIS](https://zhuanlan.zhihu.com/p/135926868)
### 1. 软件
**ArcGIS**

Erdas

Envi

**QGIS：开源**

国产：超图、中地MapGIS
### 2. 二次开发编程语言
页面前端：**html、css、JavaScript 、JQuery**、Bootstrap、Angular、**Vue**。

服务端：Java 、nodejs、Tomcat。

C#：二次开发 ， https://docs.microsoft.com/zh-cn/dotnet/csharp/

Python : 数据分析

数据库： SqlServer、MySQL、**Oracle**、PostgreSQL，PostGIS ，OracleSpatia、SpatiaLite。
### 3. GIS二次开发软件包
GDAL ，操作栅格地理数据格式的库，python语言 。
GDAL库由OGR和GDAL项目合并而来，OGR主要用于空间要素矢量数据的解析，GDAL主要用于空间栅格数据的读写。
空间参考及其投影转换使用开源库 PROJ.4。 https://gdal.org/

Geopandas: 空间数据可视化，Python语言: https://github.com/geopandas/geopandas

arcpy : https://www.arcgis.com/index.html#

ArcGIS for Developers

https://pro.arcgis.com/zh-cn/pro-app/arcpy/get-started/pro-notebooks.htm

rasterio 快速的光栅图像读写 : https://github.com/sgillies/rasterio

fiona 地理数据引擎 : https://github.com/Toblerity/Fiona

spectral-python ，高光谱图像处理 : https://github.com/spectralpython/spectral

https://sourceforge.net/projects/spectralpython/

geopy：地理信息，Welcome to GeoPy’s documentation!

**Shapely：笛卡尔平面对几何对象进行操作和分析的Python工具包，例如进行缓冲区分析 ：https://github.com/Toblerity/Shapely**

**基于Python的缓冲区分析 ： https://zhuanlan.zhihu.com/p/24782733**

**Shapely 1.7a2 文档 ： https://www.osgeo.cn/shapely/**

SpaceNet： https://github.com/SpaceNetChallenge

OGR,操作矢量数据工具 ：

Mapnik 地图制图工具 ：

Basemap，地图可视化工具 ：

地图可视化工具

（1）基于C++的，例如 GDAL - GDAL documentation, proj.4, Welcome to MapServer 等；

（2）基于JAVA的，有GeoTools The Open Source Java GIS Toolkit, GeoServer, 52 North WPS, udig等；
（3）基于Python的有用于OGC服务的 geopython，包括 pyWPS, OWSLib 等，以及很多数据处理的库（WhiteboxTools | Home, mapbox/rasterio, GDAL python, GeoPandas 0.7.0 - GeoPandas 0.7.0 documentation、Toblerity/Shapely 等），很多桌面GIS系统也都支持python脚本，如 ArcGIS （ArcPy）, QGIS, GRASS GIS、SuperMap。

（4）基于JavaScript的如 OpenLayers - Welcome、Leaflet — an open-source JavaScript library for interactive maps 等。


ArcGIS API for javascript

webpack 打包工具。
### 4. 页面前端WebGIS
1、Cesium：全球顶尖的WebGIS产品 。

2、WebGL、ThreeJS、ThingsJS

OpenLayers ，开发WebGIS客户端的JavaScript包 ： https://openlayers.org/

leafet ，JavaScript语言 移动端交互式地图 : https://leafletjs.com/index.html
### 5. 发布地图服务
1、Arcgis server 发布地图服务并展示。

2、GeoServer是OGC Web服务器规范的Java2EE实现，运行的时候需要JDK的支持。利用GeoServer可以方便地发布地图数据。
### 6. 数据分析与图像处理软件包
OpenCV ：计算机视觉，图像处理， https://opencv.org/

scikit-learn ：机器学习 ， https://scikit-learn.org/

tensorflow ： 深度学习 、图像分类、目标检测、图像分割。


## [编程语言的选择](https://zhuanlan.zhihu.com/p/446915423)
1. **python** 作为脚本语言，可以整合到许多应用程序中,MapGIS、ArcGIS、QGIS、GRASS GIS以及其他开源项目中，应用范围很广，因此学习Python非常必要.
2. **C#** 如果用来做GIS开发，给GIS软件编写新的附加组件，C#是一个不错的选择。
3. **C/C++**
4. **Java** Java是最流行的开源GIS语言之一，例如用于GeoServer项目。一般在开发应用程序的主干时使用，特别是对于桌面应用程序，可以作为C/C++或C#的替代品。
5. **JavaScript（WebGIS编程）** 一些领先的开源Web地图客户端（比如OpenLayers、Leaflet等）离不开JavaScript，其他的一些地图比如谷歌地图也同样如此。
6. SQL SQL 是用于管理关系数据库管理系统（RDBMS）。 SQL 的范围包括数据插入、查询、更新和删除，数据库模式创建和修改，以及数据访问控制。SQL在GIS编程中作为数据库访问和控制语言被广泛使用。SQL是许多GIS操作的核心，它是地理信息系统中使用广泛、历史悠久的语言之一，在很多GIS软件应用中都可以见到它。

## GIS开发体系
为了更好理解开源GIS体系，下面从两个角度对其进行划分：
### 按功能所属分层设计中的位置：
数据库<--->后台<--->呈现(CS --BS)

空间数据库： 带有空间扩展的PostgreSQL、MySQL、Ingres数据库。

GIS服务器：MapServer、GeoServer、Deegree
元数据目录系统：GeoNetwork

GIS开发工具库：GeoTools、JTS、TerraLib、Proj.4（地图投影库）

桌面GIS软件：uDig、GRASS、OpenJump、QGIS

遥感图像处理系统：OSSIM（Open Source Software Image Map）、GDAL （Geospatial Data Abstraction Library）、 OpenCV

三维地球：WorldWind、OSSIMPlanet、Earth3

WebGIS API： OpenLayers、 Leaflet 、 MapGuide 、Cesium(三维)


### 按开发语言划分：
| 语言             | 开源软件名称     |  链接                                    |
|----------------|------------|----------------------------------------|
| C++、Python, Qt | QGIS       | http://www.qgis.org/                   |
| JAVA           | gvSIG      | http://www.gvsig.org                   |
| JAVA           | uDig       | http://udig.refractions.net/download/  |
| JAVA           | GeoTools   | https://geotools.org/                  |
| JAVA           | GeoServer  | http://geoserver.org/                  |
| .NET           | DotSpatial | http://dotspatial.codeplex.com/        |
| .NET           | Mapwindow  | https://www.mapwindow.org/             |
| Js             | OpenLayers | https://openlayers.org/                |
| Js             | leaflet    | https://leafletjs.com/                 |
|                |            |                                        |

### 作为GIS全栈开发人员（偏java方向的），一般选择的组合是

PostGresql（PG:数据存储、处理）+Geoserver（地图服务）+Geotools（空间分析）+QGIS（样式制作）+Openlayers（2d呈现）+Cesium（3d呈现）

## [WebGIS 前端框架](https://zhuanlan.zhihu.com/p/408253695)
1. openlayer
2. leaflet
3. arcgis api
4. supermap 

## 技术架构是什么
1. https://www.niaogebiji.com/article-71681-1.html
