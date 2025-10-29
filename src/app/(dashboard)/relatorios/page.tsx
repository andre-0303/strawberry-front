"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Trash2, Eye } from "lucide-react";

interface Report {
  id: number;
  name: string;
  date: string;
  size: string;
}

export default function RelatoriosPage() {
  const [reports, setReports] = useState<Report[]>([
    { id: 1, name: "Relatório_Prod_Maio.pdf", date: "10/05/2025", size: "2.1 MB" },
    { id: 2, name: "Prod_Abril.pdf", date: "05/04/2025", size: "1.7 MB" },
  ]);

  function handleUpload() {
    alert("Função de upload será conectada à API futuramente 🍓");
  }

  function handleView(report: Report) {
    alert(`Abrindo ${report.name}`);
  }

  function handleDelete(id: number) {
    setReports((prev) => prev.filter((r) => r.id !== id));
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-pink-700">Relatórios PDF</h1>
        <Button onClick={handleUpload} className="gap-2">
          <Upload className="w-4 h-4" /> Enviar Relatório
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
          <Card key={report.id} className="shadow-sm border hover:shadow-md transition">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <FileText className="w-4 h-4 text-pink-600" />
                {report.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              <p>📅 {report.date}</p>
              <p>💾 {report.size}</p>

              <div className="flex gap-2 mt-3">
                <Button variant="outline" size="sm" onClick={() => handleView(report)}>
                  <Eye className="w-4 h-4" /> Ver
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(report.id)}
                >
                  <Trash2 className="w-4 h-4" /> Excluir
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {reports.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          Nenhum relatório encontrado 🍓
        </p>
      )}
    </div>
  );
}
