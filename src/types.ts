export interface ICharacter {
	id: string;
	name: string;
	species: string;
	episode: Episode[];
	__typename: typeName;
}

type Episode =
	| number
	| {
			episode: string;
			__typename: typeName;
	  };

type typeName = "Character" | "Episode";
