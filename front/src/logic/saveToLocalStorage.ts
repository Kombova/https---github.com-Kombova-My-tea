

export const LocalStorage = {
    saveToLocalStorage : function(key:string,value:string){
        localStorage.setItem(key, JSON.stringify(value));
    },
     removeFromLocalStorage : function(key:string) {
        localStorage.removeItem(key);
      },
    getFromLocalStorage : function(key:string) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
      }
}