export interface ICharacter {
	id: string;
	name: string;
	species: string;
	status: string;
	gender: string;
	type: string;
	__typename: "Character" | "Episode";
}

export type Episode = {
	episode: string;
	__typename: typeName;
};

type typeName = "Character" | "Episode";
