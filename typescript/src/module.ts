export const name: string = "Alief";
export function subtract(a: number, b: number): number {
  return a - b;
}

export default function stringModule(a: string, b: string): any {
  return {
    generateRandomCharacters: (length: number) => {
      return (
        Array.from({ length }),
        () => String.fromCharCode(Math.floor(Math.random() * 26) + 97)
      );
    },
    generateUsername: (name: string) => {
      return name
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
    },
  };
}
