/**
 * Created by pengchaoyang on 2018/9/28
 * 写一个老鼠走迷宫算法rat_in_maze(maze)返回路径，再写一个函数print打印迷宫和走的过程，打印老鼠走的路径。
 */
const maze = [
    [0,1,0,0,0,0],
    [0,1,0,1,1,0],
    [0,0,0,1,0,1],
    [1,1,0,0,0,1],
    [0,0,0,1,1,1],
    [2,1,0,0,0,0]
]
function rat_in_maze(maze,i=0,j=0){
    let minX=0,minY=0,maxX=maze[0].length,maxY=maze.length
    print(maze)
    console.log('--------------------------')
    if(i<0||j<0||i>=maxX||j>=maxY) return false
    if(maze[i][j]===4) return false
    if(maze[i][j]===2) {
        maze[i][j]=6  //通路
        return true
    }
    if(maze[i][j]===0){
        maze[i][j]=6
    }else{
        return false
    }
    let down=rat_in_maze(maze,i+1,j)
    let up=rat_in_maze(maze,i-1,j)
    let right=rat_in_maze(maze,i,j+1)
    let left=rat_in_maze(maze,i,j-1)
    if(!down&&!up&&!left&&!right){
        maze[i][j]=4  //死路
        return false
    }
    return true
}
function print(m){
    m.forEach(list=>console.log(list))
}
rat_in_maze(maze)
print( maze )