import { setTimeout } from "timers";
import { resolve } from "path";

class ListingService {
    constructor(){

    }

    getlisting1 () {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("dapet 1")
                resolve(3)
            }, 5000);
        });
    }

    getlisting2 (id) {
        return new Promise((res) => {
            setTimeout(()=> {
                console.log("dapet 2")
                res({
                    number: id
                })
            }, 2000)
        })
    }
    
    async getListing(){
        let oke1 = await this.getlisting1();
        let oke2 = await this.getlisting2(oke1);
        return oke2;
    }
}

export default new ListingService();