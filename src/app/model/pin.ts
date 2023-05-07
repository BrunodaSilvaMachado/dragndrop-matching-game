import { CdkDrag } from "@angular/cdk/drag-drop";

export interface IPin {
    id:number
    title?:string,
    src?:string,
}

export const pins:IPin[] = [
    {id:1, title:"Joaninha",src:"./assets/Botoes/Botoes_jogo_lince_1.png"},
    {id:2, title:"Televisão",src:"./assets/Botoes/Botoes_jogo_lince_2.png"},
    {id:3, title:"Arvore de carvalho",src:"./assets/Botoes/Botoes_jogo_lince_3.png"},
    {id:4, title:"Copo de suco colorido",src:"./assets/Botoes/Botoes_jogo_lince_4.png"},
    {id:5, title:"Bola colorida",src:"./assets/Botoes/Botoes_jogo_lince_5.png"},
    {id:6, title:"Borracha escolar verde",src:"./assets/Botoes/Botoes_jogo_lince_6.png"},
    {id:7, title:"Abelha",src:"./assets/Botoes/Botoes_jogo_lince_7.png"},
    {id:8, title:"Livros de cor Azul",src:"./assets/Botoes/Botoes_jogo_lince_8.png"},
    {id:9, title:"Borboleta Roxa",src:"./assets/Botoes/Botoes_jogo_lince_9.png"},
    {id:10, title:"Passarinho verde",src:"./assets/Botoes/Botoes_jogo_lince_10.png"},
    {id:11, title:"Trenzinho",src:"./assets/Botoes/Botoes_jogo_lince_11.png"},
    {id:12, title:"Bola de futebol",src:"./assets/Botoes/Botoes_jogo_lince_12.png"},
    {id:13, title:"Lapis",src:"./assets/Botoes/Botoes_jogo_lince_13.png"},
    {id:14, title:"Passarinho Azul",src:"./assets/Botoes/Botoes_jogo_lince_14.png"},
    {id:15, title:"Copo de suco verde",src:"./assets/Botoes/Botoes_jogo_lince_15.png"},
    {id:16, title:"Arvore de Bordo",src:"./assets/Botoes/Botoes_jogo_lince_16.png"},
    {id:17, title:"Logotipo Adaca",src:"./assets/Botoes/Botoes_jogo_lince_17.png"},
    {id:18, title:"Arvore do cerrado ",src:"./assets/Botoes/Botoes_jogo_lince_18.png"},
    {id:19, title:"Bola de praia",src:"./assets/Botoes/Botoes_jogo_lince_19.png"},
    {id:20, title:"Copo de vidro com suco de laranja",src:"./assets/Botoes/Botoes_jogo_lince_20.png"},
    {id:21, title:"Copo de vidro com suco de limão",src:"./assets/Botoes/Botoes_jogo_lince_21.png"},
    {id:22, title:"Sorvete de casquinha",src:"./assets/Botoes/Botoes_jogo_lince_22.png"},
    {id:23, title:"Leão",src:"./assets/Botoes/Botoes_jogo_lince_23.png"},
    {id:24, title:"Panda",src:"./assets/Botoes/Botoes_jogo_lince_24.png"},
    {id:25, title:"Triângulo laranja",src:"./assets/Botoes/Botoes_jogo_lince_25.png"},
    {id:26, title:"Losango rosa ",src:"./assets/Botoes/Botoes_jogo_lince_26.png"},
    {id:27, title:"Criança com trofeu na mão",src:"./assets/Botoes/Botoes_jogo_lince_27.png"},
    {id:28, title:"Circulo azul",src:"./assets/Botoes/Botoes_jogo_lince_28.png"},
    {id:29, title:"Quadrado vermelho",src:"./assets/Botoes/Botoes_jogo_lince_29.png"},
    {id:30, title:"Pentagono verde",src:"./assets/Botoes/Botoes_jogo_lince_30.png"},
    {id:31, title:"Caminhão",src:"./assets/Botoes/Botoes_jogo_lince_31.png"},
    {id:32, title:"Castelo",src:"./assets/Botoes/Botoes_jogo_lince_32.png"},
    {id:33, title:"Peixinho de aquario",src:"./assets/Botoes/Botoes_jogo_lince_33.png"},
    {id:34, title:"Carrinho abstrato",src:"./assets/Botoes/Botoes_jogo_lince_34.png"},
    {id:35, title:"Criança sorrindo",src:"./assets/Botoes/Botoes_jogo_lince_35.png"},
    {id:36, title:"Bola de Basquetebol",src:"./assets/Botoes/Botoes_jogo_lince_36.png"},
    {id:37, title:"Macieira",src:"./assets/Botoes/Botoes_jogo_lince_37.png"},
    {id:38, title:"Figura abstrata lilas",src:"./assets/Botoes/Botoes_jogo_lince_38.png"},
    {id:39, title:"Figura abstrata azul",src:"./assets/Botoes/Botoes_jogo_lince_39.png"}
];

export class OneMatch implements IPin{
    list:IPin[]=[];
    constructor(public id:number, public title: string, public src: string,public hover: string) {
        this.list = [{id:id}];
    }

    match(): boolean{
        return this.list?.length > 1;
    }
}

export const pinshover:OneMatch[] = [
    new OneMatch(1,"Fundo: Joaninha","./assets/BotoesHover/Botoes_jogo_lince_1.png","./assets/BotoesHover/Botoes_jogo_lince_1_houver.png"),
    new OneMatch(2, "Fundo: Televisão","./assets/BotoesHover/Botoes_jogo_lince_2.png","./assets/BotoesHover/Botoes_jogo_lince_2_houver.png"),
    new OneMatch(3,"Fundo: Arvore de carvalho","./assets/BotoesHover/Botoes_jogo_lince_3.png","./assets/BotoesHover/Botoes_jogo_lince_3_houver.png"),
    new OneMatch(4,"Fundo: Copo de suco colorido","./assets/BotoesHover/Botoes_jogo_lince_4.png","./assets/BotoesHover/Botoes_jogo_lince_4_houver.png"),
    new OneMatch(5,"Fundo: Bola colorida","./assets/BotoesHover/Botoes_jogo_lince_5.png","./assets/BotoesHover/Botoes_jogo_lince_5_houver.png"),
    new OneMatch(6,"Fundo: Borracha escolar verde","./assets/BotoesHover/Botoes_jogo_lince_6.png","./assets/BotoesHover/Botoes_jogo_lince_6_houver.png"),
    new OneMatch(7,"Fundo: Abelha","./assets/BotoesHover/Botoes_jogo_lince_7.png","./assets/BotoesHover/Botoes_jogo_lince_7_houver.png"),
    new OneMatch(8,"Fundo: Livros de cor Azul","./assets/BotoesHover/Botoes_jogo_lince_8.png","./assets/BotoesHover/Botoes_jogo_lince_8_houver.png"),
    new OneMatch(9,"Fundo: Borboleta Roxa","./assets/BotoesHover/Botoes_jogo_lince_9.png","./assets/BotoesHover/Botoes_jogo_lince_9_houver.png"),
    new OneMatch(10,"Fundo: Passarinho verde","./assets/BotoesHover/Botoes_jogo_lince_10.png","./assets/BotoesHover/Botoes_jogo_lince_10_houver.png"),
    new OneMatch(11,"Fundo: Trenzinho","./assets/BotoesHover/Botoes_jogo_lince_11.png","./assets/BotoesHover/Botoes_jogo_lince_11_houver.png"),
    new OneMatch(12,"Fundo: Bola de futebol","./assets/BotoesHover/Botoes_jogo_lince_12.png","./assets/BotoesHover/Botoes_jogo_lince_12_houver.png"),
    new OneMatch(13,"Fundo: Lapis","./assets/BotoesHover/Botoes_jogo_lince_13.png","./assets/BotoesHover/Botoes_jogo_lince_13_houver.png"),
    new OneMatch(14,"Fundo: Passarinho Azul","./assets/BotoesHover/Botoes_jogo_lince_14.png","./assets/BotoesHover/Botoes_jogo_lince_14_houver.png"),
    new OneMatch(15,"Fundo: Copo de suco verde","./assets/BotoesHover/Botoes_jogo_lince_15.png","./assets/BotoesHover/Botoes_jogo_lince_15_houver.png"),
    new OneMatch(16,"Fundo: Arvore de Bordo","./assets/BotoesHover/Botoes_jogo_lince_16.png","./assets/BotoesHover/Botoes_jogo_lince_16_houver.png"),
    new OneMatch(17,"Fundo: Logotipo Adaca","./assets/BotoesHover/Botoes_jogo_lince_17.png","./assets/BotoesHover/Botoes_jogo_lince_17_houver.png"),
    new OneMatch(18, "Fundo: Arvore do cerrado ","./assets/BotoesHover/Botoes_jogo_lince_18.png","./assets/BotoesHover/Botoes_jogo_lince_18_houver.png"),
    new OneMatch(19,"Fundo: Bola de praia","./assets/BotoesHover/Botoes_jogo_lince_19.png","./assets/BotoesHover/Botoes_jogo_lince_19_houver.png"),
    new OneMatch(20,"Fundo: Copo de vidro com suco de laranja","./assets/BotoesHover/Botoes_jogo_lince_20.png","./assets/BotoesHover/Botoes_jogo_lince_20_houver.png"),
    new OneMatch(21, "Fundo: Copo de vidro com suco de limão","./assets/BotoesHover/Botoes_jogo_lince_21.png","./assets/BotoesHover/Botoes_jogo_lince_21_houver.png"),
    new OneMatch(22,"Fundo: Sorvete de casquinha","./assets/BotoesHover/Botoes_jogo_lince_22.png","./assets/BotoesHover/Botoes_jogo_lince_22_houver.png"),
    new OneMatch(23, "Fundo: Leão","./assets/BotoesHover/Botoes_jogo_lince_23.png","./assets/BotoesHover/Botoes_jogo_lince_23_houver.png"),
    new OneMatch(24,"Fundo: Panda","./assets/BotoesHover/Botoes_jogo_lince_24.png","./assets/BotoesHover/Botoes_jogo_lince_24_houver.png"),
    new OneMatch(25, "Fundo: Triângulo laranja","./assets/BotoesHover/Botoes_jogo_lince_25.png","./assets/BotoesHover/Botoes_jogo_lince_25_houver.png"),
    new OneMatch(26, "Fundo: Losango rosa ","./assets/BotoesHover/Botoes_jogo_lince_26.png","./assets/BotoesHover/Botoes_jogo_lince_26_houver.png"),
    new OneMatch(27, "Fundo: Criança com trofeu na mão","./assets/BotoesHover/Botoes_jogo_lince_27.png","./assets/BotoesHover/Botoes_jogo_lince_27_houver.png"),
    new OneMatch(28,"Fundo: Circulo azul","./assets/BotoesHover/Botoes_jogo_lince_28.png","./assets/BotoesHover/Botoes_jogo_lince_28_houver.png"),
    new OneMatch(29,"Fundo: Quadrado vermelho","./assets/BotoesHover/Botoes_jogo_lince_29.png","./assets/BotoesHover/Botoes_jogo_lince_29_houver.png"),
    new OneMatch(30,"Fundo: Pentagono verde","./assets/BotoesHover/Botoes_jogo_lince_30.png","./assets/BotoesHover/Botoes_jogo_lince_30_houver.png"),
    new OneMatch(31, "Fundo: Caminhão","./assets/BotoesHover/Botoes_jogo_lince_31.png","./assets/BotoesHover/Botoes_jogo_lince_31_houver.png"),
    new OneMatch(32,"Fundo: Castelo","./assets/BotoesHover/Botoes_jogo_lince_32.png","./assets/BotoesHover/Botoes_jogo_lince_32_houver.png"),
    new OneMatch(33,"Fundo: Peixinho de aquario","./assets/BotoesHover/Botoes_jogo_lince_33.png","./assets/BotoesHover/Botoes_jogo_lince_33_houver.png"),
    new OneMatch(34,"Fundo: Carrinho abstrato","./assets/BotoesHover/Botoes_jogo_lince_34.png","./assets/BotoesHover/Botoes_jogo_lince_34_houver.png"),
    new OneMatch(35, "Fundo: Criança sorrindo","./assets/BotoesHover/Botoes_jogo_lince_35.png","./assets/BotoesHover/Botoes_jogo_lince_35_houver.png"),
    new OneMatch(36,"Fundo: Bola de Basquetebol","./assets/BotoesHover/Botoes_jogo_lince_36.png","./assets/BotoesHover/Botoes_jogo_lince_36_houver.png"),
    new OneMatch(37,"Fundo: Macieira","./assets/BotoesHover/Botoes_jogo_lince_37.png","./assets/BotoesHover/Botoes_jogo_lince_37_houver.png"),
    new OneMatch(38,"Fundo: Figura abstrata lilas","./assets/BotoesHover/Botoes_jogo_lince_38.png","./assets/BotoesHover/Botoes_jogo_lince_38_houver.png"),
    new OneMatch(39,"Fundo: Figura abstrata azul","./assets/BotoesHover/Botoes_jogo_lince_39.png","./assets/BotoesHover/Botoes_jogo_lince_39_houver.png")
];



