export class CounterService {
    inactiveToActiveCounter: number = 0;
    activeToInactiveCounter: number = 0;

    countInactiveToActive() {
        this.inactiveToActiveCounter = this.inactiveToActiveCounter + 1;
    }

    countActiveToInactive() {
        this.activeToInactiveCounter = this.activeToInactiveCounter + 1;
    }
}