#!/usr/bin/env python3
"""
Premium CV to PDF converter using pdfkit
"""

import os
import pdfkit

def create_premium_pdf():
    try:
        # Define file paths
        html_file = "Nabil_Channa_Ultra_Premium_CV_Complete.html"
        pdf_file = "Nabil_Channa_Ultra_Premium_CV.pdf"
        
        # Check if HTML file exists
        if not os.path.exists(html_file):
            print(f"Error: {html_file} not found!")
            return False
            
        # Configure pdfkit options for high quality PDF
        options = {
            'page-size': 'A4',
            'margin-top': '0.5in',
            'margin-right': '0.5in',
            'margin-bottom': '0.5in',
            'margin-left': '0.5in',
            'encoding': "UTF-8",
            'no-outline': None,
            'enable-local-file-access': None,
            'print-media-type': None,
            'disable-smart-shrinking': None,
            'quality': 100,
            'dpi': 300
        }
        
        print(f"Converting {html_file} to {pdf_file}...")
        print("This may take a moment...")
        
        # Convert HTML to PDF
        pdfkit.from_file(html_file, pdf_file, options=options)
        
        # Verify PDF was created
        if os.path.exists(pdf_file):
            size = os.path.getsize(pdf_file)
            print(f"✅ Successfully created {pdf_file}")
            print(f"📄 PDF size: {size:,} bytes")
            return True
        else:
            print("❌ PDF file was not created")
            return False
        
    except Exception as e:
        print(f"❌ Error: {e}")
        print("\nTry these solutions:")
        print("1. Install wkhtmltopdf: https://wkhtmltopdf.org/downloads.html")
        print("2. Or open HTML file in browser and print to PDF manually")
        return False

if __name__ == "__main__":
    create_premium_pdf() 