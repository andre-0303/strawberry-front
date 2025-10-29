"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, FileText, Leaf } from "lucide-react";
import { ProductivityChart } from "@/components/charts/ProductivityChart";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold text-pink-700">Painel de Produção 🍓</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">Frutas colhidas</CardTitle>
            <Leaf className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1.245 kg</p>
            <p className="text-xs text-gray-500">No último mês</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">Produção total</CardTitle>
            <BarChart3 className="h-5 w-5 text-pink-600" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">9.832 kg</p>
            <p className="text-xs text-gray-500">Desde janeiro</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">Último relatório</CardTitle>
            <FileText className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">15/10/2025</p>
            <p className="text-xs text-gray-500">Arquivo: prod_2025Q3.pdf</p>
          </CardContent>
        </Card>
        <ProductivityChart />
      </div>
    </div>
  );
}
