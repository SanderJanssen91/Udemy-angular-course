import { Injectable, EventEmitter } from "@angular/core";
import { CounterService } from "app/counter.service";

@Injectable()
export class UsersService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    activeToInactiveCounterUpdated = new EventEmitter<string>();
    inactiveToActiveCounterUpdated = new EventEmitter<string>();

    constructor(private counterService: CounterService){}

    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.countActiveToInactive();
    }

    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.countInactiveToActive();
    }
}