const VStatus={
  UNDISCOVERED:{},
  DISCOVERED:{},
  VISITED:{}
}
const EStatus={
  UNDETERMINED:{},
  TREE:{},
  CROSS:{},
  FORWARD:{},
  BACKWARD:{},
}
class Vertex{
  constructor (data={}){
    this.data=data         //数据
    this.inDegree=0        //入度
    this.outDegree=0       //出度
    this.status=VStatus.UNDISCOVERED   //状态
    this.parent=-1       //在遍历树中的父节点
    this.dTime=-1
    this.fTime=-1       //时间标签
    this.priority=Number.MAX_VALUE  //优先级
  }
}
class Edge{
  constructor (data={},weight){
    this.data=data
    this.weight=weight       //权重
    this.status=EStatus.UNDETERMINED
  }
}
class Graph{
  constructor (){

  }
}

class GraphMatrix extends Graph{
  constructor (){
    super()
    this.vertexs=[]         //顶点集
    this.edges=[
      /*
      [e,...],
      ...
      */]           //边集，
  }
}