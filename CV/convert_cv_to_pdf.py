#!/usr/bin/env python3
"""
Script to convert HTML CV to PDF
Requires: pip install weasyprint
"""

import os
from pathlib import Path

def convert_html_to_pdf():
    try:
        # Try importing weasyprint
        from weasyprint import HTML, CSS
        
        # Define file paths
        html_file = "Nabil_Channa_Ultra_Premium_CV_Complete.html"
        pdf_file = "Nabil_Channa_Ultra_Premium_CV.pdf"
        
        # Check if HTML file exists
        if not os.path.exists(html_file):
            print(f"Error: {html_file} not found!")
            # Try alternative file name
            html_file = "Nabil_Channa_Ultra_Premium_CV_2024.html"
            if not os.path.exists(html_file):
                print(f"Error: {html_file} also not found!")
                return False
            
        # Convert HTML to PDF
        print(f"Converting {html_file} to {pdf_file}...")
        HTML(filename=html_file).write_pdf(pdf_file)
        print(f"✅ Successfully created {pdf_file}")
        
        # Verify PDF was created
        if os.path.exists(pdf_file):
            size = os.path.getsize(pdf_file)
            print(f"📄 PDF size: {size} bytes")
            return True
        else:
            print("❌ PDF file was not created")
            return False
        
    except ImportError:
        print("❌ weasyprint not installed.")
        print("Install with: pip install weasyprint")
        print("Alternatively, open the HTML file in browser and print to PDF manually.")
        return False
        
    except Exception as e:
        print(f"❌ Error converting to PDF: {e}")
        return False

if __name__ == "__main__":
    convert_html_to_pdf() 