import { useState } from "react";
import { Document, Page } from "react-pdf";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Privacy() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col items-center gap-4">
            <Document
              file="/assets/Privacy.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="w-full h-[800px] flex items-center justify-center">
                  <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
                </div>
              }
            >
              <Page pageNumber={pageNumber} />
            </Document>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                disabled={pageNumber <= 1}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              <span>
                Page {pageNumber} of {numPages}
              </span>

              <Button
                variant="outline"
                onClick={() => setPageNumber(Math.min(numPages || 1, pageNumber + 1))}
                disabled={pageNumber >= (numPages || 1)}
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}