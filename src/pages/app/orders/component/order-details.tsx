import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 202n34n3se</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
        <Separator />
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">Pendente</span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                Alisson Ramon
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                (11) 99999-9999
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                ramon.dev@gmail.com
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Realizado há</TableCell>
              <TableCell className="flex justify-end">
                3 minutos
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Quantidade</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">SubTotal</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Caixa de Limão</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">R$ 100,00</TableCell>
              <TableCell className="text-right">R$ 100,00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Caixa de Morango</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$ 48,00</TableCell>
              <TableCell className="text-right">R$ 88,00</TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableCell colSpan={3} className="text-right">Total do pedido</TableCell>
            <TableCell className="text-right font-medium">R$ 188,00</TableCell>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}