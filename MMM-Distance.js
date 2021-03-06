Module.register("MMM-Distance",{
    defaults:{
        meter : 0
    },
    start:function(){
        this.meter=this.config.meter;
    },
    getStyles:function(){
        return["MMM-Distance.css"];
    },
    getDom:function(){
        var wrapper=document.createElement("div");
        wrapper.id="Distance-wrapper";
        var html=`
            <div id="Distance">
            <p ><span id="welcome">This elevator has travelled <span id="emphasize">${this.meter}</span> km</span>
            <br>
            <span id="date"> (since Apr 9, 2019)</span></p>
            </div>
        `
        wrapper.insertAdjacentHTML("afterbegin",html);
        return wrapper;
    },
    notificationReceived:function(notification,payload,sender){
        switch(notification){
            case "port/rnd/travel":
            console.log(payload);
            var info=JSON.parse(payload);
            this.meter=info.distance;
            this.updateDom();
            break;
            default:
            break;
        }
    }
})