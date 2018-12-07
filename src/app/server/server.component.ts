import {Component} from '@angular/core'

@Component({
    selector:'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent{
    serverId =102; // or serverId : number=102
    serverStatus = 'Offline';

    getServerStatus(){
        return this.serverStatus;
    }

}