(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],[,,,,,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAK0SURBVFiFtdZvSBNxGMDx53fbdG5XjW0ag8oXJuXqxcyZYKlFaZQv+sNGqygwol6oZNEbddaLar2zwGXh24IJBgaFEpkv3IKCtpm0ExJiaCXpbi9MJvP+9SYldbf97k/Py9tz+3447m4DUHlqLkTsVec/lOLuE2rGj7ZEB3UmfsJozqOONEef45yD1Io3tI73C4h1I80yAQDAc/m8wKHBd4/3uf47YH18ZXAQigFicVyEIkCuOA5CNgA3ngshCyA1ng0hGVDfGh0QEHeGkBhfGYHP5wVeMzDS4/AASHwPuDqpNqfd1GA0INnvD0SkCQFx7vqW8QCAhCvg6aBunKixdtQ6zdZghIYXo99haTkt1wEso2cXF5g9GqlxAIBimwFIvQ6mplPAcpwsAM8TgpbRP8kJcHVSbY211vY6p7nw3+PFNgOQBTqYmpGO4FmdQCDt69E+hz8rwOOlmo8fsHQdclqKMn1ebDOAicyDr/EUMByLHUegffW2p/wkAIAowOOlmo9VW+4crrQUiu0AAGzfWgBbSB0WYn1cFIAbl4LIFM8IkBrHQYjFNwDkxrMhssXXAJTGMyHSaZQ1vgpwe6nrjQetXrG7XQ5i+iez+GOOGR7xl5/KtktUX/xcVLFr0626CrMqcQCAsU/JxLeZ1O0Rv+N0rl0iXcDwHA+8mvGhYMLX77M/xNnXzIb7UoVlV5YEAlWWbDOQiuLhJD0coh/gxgH+3gOxUG/YWNK0wLJC1c4dRqOceDCSpIff077AvbJuKeetPgVfxnrDZOllWYhgJEkPhWhf4K60+BqAXISS+AaAVITSeEYALkKNuCggF0KtONZ4umJXn76c/RWfZ4X4PCs8ezOXONc1eVOt78f6T3i2PXZt7+7NHVoNoInJ392B+/ZHagGwZ/+lj5aapoiiH6pM8wd8sKnqTn6FsQAAAABJRU5ErkJggg=="},,,function(e,t,r){e.exports=r(16)},,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),l=r(2),o=r.n(l),c=(r(14),r(3)),u=r(4),s=r(7),i=r(5),A=r(8),f=(r(15),function(e){var t=e.number,r=e.rowId,n=e.columnId,l=e.selectCell,o=e.currentCell,c=e.errorCells,u="".concat(r).concat(n),s=0===t?"":t,i="box "+u;return i+=o===u?" active":"",i+=c.includes(u)?" error":"",a.a.createElement("div",{className:i,id:u,onClick:function(){return l(r,n)}},a.a.createElement("label",null,s))}),d=function(e){var t=e.row,r=e.rowId,n=e.selectCell,l=e.currentCell,o=e.errorCells;return a.a.createElement("div",{className:"row",id:r},t.map((function(e,t){return a.a.createElement(f,{key:t,number:e,rowId:r,columnId:t,selectCell:n,currentCell:l,errorCells:o})})))},m=r(6),v=r.n(m),C=[[8,0,2,0,9,6,0,0,0],[0,0,5,0,1,8,0,3,0],[1,0,6,7,0,0,0,2,4],[0,7,8,9,0,2,1,0,5],[0,0,0,1,0,5,6,0,3],[0,0,1,0,0,0,0,9,8],[9,8,4,0,3,1,7,0,0],[2,5,0,0,4,9,0,8,0],[6,0,0,0,0,0,0,0,0]],h={puzzleInput:[],values:[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],currentCell:"",x:"",y:"",errorCells:[]},p=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(i.a)(t).call(this))).selectCell=function(t,r){var n="".concat(t).concat(r);e.setState({x:t,y:r,currentCell:n})},e.validateNumber=function(t){if(e.state.currentCell&&!isNaN(e.state.y)&&!isNaN(e.state.x)){var r=e.state,n=r.values,a=r.errorCells,l=e.state,o=l.x,c=l.y;if(0===e.state.puzzleInput[o][c])if(n[e.state.x][e.state.y]=t,e.isValidNumber(t))a.includes(e.state.currentCell)&&a.splice(a.indexOf(e.state.currentCell),1),e.setState({values:n,errorCells:a}),e.checkforSolution()&&(alert("Congratulations! You hav solved th puzzle!"),e.loadPuzzle());else a.push(e.state.currentCell),e.setState({values:n,errorCells:a})}},e.createButtonOptions=function(){for(var t=[],r=function(r){t.push(a.a.createElement("div",{className:"button",key:r,onClick:function(){return e.validateNumber(r)}},r))},n=1;n<10;n++)r(n);return t.push(a.a.createElement("div",{className:"eraser",key:"eraser",onClick:e.eraseCurrentCell},a.a.createElement("img",{src:v.a,alt:"eraser"}))),t},e.isValidNumber=function(t){for(var r=e.state,n=r.values,a=r.x,l=r.y,o=0;o<9;o++)if(o!==l&&n[a][o]===t)return!1;for(var c=0;c<9;c++)if(c!==a&&n[c][l]===t)return!1;for(var u=Math.ceil((a+1)/3),s=Math.ceil((l+1)/3),i=3*(u-1);i<3*u;i++)for(var A=3*(s-1);A<3*s;A++)if(i!==a&&A!==l&&n[i][A]===t)return!1;return!0},e.checkforSolution=function(){for(var t=e.state.values,r=!0,n=0;n<9;n++){if(t[n].includes(0)){r=!1;break}for(var a=1;a<=9;a++)if(!t[n].includes(a)){r=!1;break}}if(r)for(var l=[],o=0;o<9;o++){l=[];for(var c=0;c<9;c++)l.push(t[c][o]);for(var u=1;u<=9;u++)if(!l.includes(u)){r=!1;break}}return r},e.eraseCurrentCell=function(){var t=e.state,r=t.currentCell,n=t.x,a=t.y,l=e.state.values;isNaN(r)||0!==e.state.puzzleInput[n][a]||(l[n][a]=0,document.getElementById(r).firstChild.innerHTML="",e.setState({values:l}))},e.loadPuzzle=function(){var t=C.map((function(e){return e.slice(0)}));e.setState({values:t,puzzleInput:C})},e.getRandomNumber=function(){return Math.floor(9*Math.random())+1},e.state=h,e}return Object(A.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadPuzzle()}},{key:"render",value:function(){var e=this,t=this.state,r=t.values,n=t.currentCell,l=t.errorCells;return a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,"S U D O K U"),a.a.createElement("div",{className:"board"},r.map((function(t,r){return a.a.createElement(d,{key:r,row:t,rowId:r,selectCell:e.selectCell,currentCell:n,errorCells:l})}))),a.a.createElement("div",{className:"button-options"},this.createButtonOptions()))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.982fdacc.chunk.js.map