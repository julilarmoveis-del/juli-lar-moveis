export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function installmentPrice(price: number, installments: number): string {
  return formatBRL(price / installments);
}

export function availabilityLabel(availability: string): string {
  switch (availability) {
    case "in_stock":
      return "Em estoque";
    case "preorder":
      return "Sob encomenda";
    case "out_of_stock":
      return "Fora de estoque";
    default:
      return "Em estoque";
  }
}
