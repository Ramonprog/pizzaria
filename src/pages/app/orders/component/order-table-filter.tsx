import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, X } from "lucide-react";

export function OrderTableFilter() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="ID do pedido" className="h-8 w-auto" />
      <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-auto">
          <SelectValue placeholder="Selecione um status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Status</SelectLabel>
            <SelectItem value="all">Todos os status</SelectItem>
            <SelectItem value="pending">Pendentes</SelectItem>
            <SelectItem value="canceled">Cancelados</SelectItem>
            <SelectItem value="processing">Em preparo</SelectItem>
            <SelectItem value="delivery">Em entrega</SelectItem>
            <SelectItem value="delivered">Entregues</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button type="submit" variant={"secondary"}> <Search className="h-3 w-3 mr-2" /> Filtrar resultados</Button>
      <Button type="button" variant={"outline"}> <X className="h-3 w-3 mr-2" /> Remover filtros</Button>
    </form>
  )
}