(()=>{var e,t={646:e=>{function t(e){this.$el=e,this.setupEasel()}window._randomColorString=function(){return"#"+Math.random().toString(16).substr(-6)},t.prototype.exercise0=function(){$("li").removeClass("square")},t.prototype.exercise1=function(){$("li").addClass("orange")},t.prototype.exercise2=function(){$(".square").remove()},t.prototype.exercise3=function(){const e=$("<h1>").text("i love jquery");$("#easel").append(e)},t.prototype.exercise4=function(){$("li:odd").text("HL")},t.prototype.exercise5=function(){$("ul").on("click","li",(e=>{let t=$(e.currentTarget).attr("data-pos");alert(t)}))},t.prototype.exercise6=function(){$(".square").each(((e,t)=>{$(t).css("background-color",window._randomColorString())}))},t.prototype.exercise7=function(){$("button").get(7).click(),$("#easel").on("mouseenter",".square",(e=>{let t=$(e.currentTarget).css("background-color");console.log(t)}))},t.prototype.setupEasel=function(){const e=$("<button>").html("Add a row");this.$el.append(e),e.on("click",this.addRow.bind(this));for(let e=0;e<=7;e++){const t=$("<button>").html("Exercise "+e);t.on("click",this["exercise"+e]),this.$el.append(t)}for(let e=0;e<20;e++)this.addRow()},t.prototype.addRow=function(){const e=this.$el.find(".row").length,t=$("<ul>").addClass("row").addClass("group");for(let o=0;o<20;o++){const r=$("<li>").addClass("square").attr("data-pos",[e,o]);r.on("mouseenter",(e=>{$(e.currentTarget).css("background-color",window._randomColorString())})),t.append(r)}this.$el.append(t)},e.exports=t}},o={};e=function e(r){if(o[r])return o[r].exports;var n=o[r]={exports:{}};return t[r](n,n.exports,e),n.exports}(646),$((function(){var t=$("#easel");new e(t)}))})();