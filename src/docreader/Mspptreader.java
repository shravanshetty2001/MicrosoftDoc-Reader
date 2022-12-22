package docreader;
import org.apache.poi.xslf.usermodel.XMLSlideShow;

import org.apache.poi.xslf.extractor.XSLFPowerPointExtractor;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
public class Mspptreader {
	public static void main(String args[])
	{
	String fileName = "C:\\Users\\shrav\\Downloads\\samplepptx.pptx";
	 	XMLSlideShow doc;
		try {
			doc = new XMLSlideShow(Files.newInputStream(Paths.get(fileName)));
			XSLFPowerPointExtractor xwpfWordExtractor = new XSLFPowerPointExtractor(doc);
	         String docText = xwpfWordExtractor.getText();
	         System.out.println(docText);

	         // find number of words in the document
	         long count = Arrays.stream(docText.split("\\s+")).count();
	         System.out.println("Total words: " + count);

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
	 

         
	
	}
	
	
	

}
