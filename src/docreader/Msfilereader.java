package docreader;


import org.apache.poi.xwpf.extractor.XWPFWordExtractor;
import org.apache.poi.xwpf.usermodel.XWPFDocument;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
public class Msfilereader {
	public static void main(String args[])
	{
	String fileName = "C:\\Users\\shrav\\Downloads\\samplefile.docx";
	 	XWPFDocument doc;
		try {
			doc = new XWPFDocument(Files.newInputStream(Paths.get(fileName)));
			XWPFWordExtractor xwpfWordExtractor = new XWPFWordExtractor(doc);
	         String docText = xwpfWordExtractor.getText();
	         System.out.println(docText);

	         // find number of words in the document
	         long count = Arrays.stream(docText.split("\\s+")).count();
	         //System.out.println("Total words: " + count);

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
	 

         
	
	}
}


