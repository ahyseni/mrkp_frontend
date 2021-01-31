export class Group{
   public id: string;
   public version: number;
   public nameEN: string;
   public active: boolean;
   public name: string;
   public code: string;
   public description: string;
   public  extrafield1: string;
   public extrafield: string;

constructor(id: string, version: number, nameEN: string, active: boolean,
            name: string, code: string, description: string, extrafield1: string, extrafield: string){
        this.id = id;
        this.version = version;
        this.nameEN = nameEN;
        this.name = name;
        this.code = code;
        this.description = description;
        this.extrafield = extrafield;
        this.extrafield1 = extrafield1;
        this.active = active;
}
}
export interface MasterGroupSerializer{
    convertFromJson(json: any): Group;
    converToJson(resource: Group): any;
}
