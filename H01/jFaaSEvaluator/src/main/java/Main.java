import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class Main {
    final static String NQUEENS_FUNCTION_URL_GB = "https://eu-gb.functions.appdomain.cloud/api/v1/web/93751f59-985f-4834-a51a-e8856b276f9a/default/H01-task1-nqueens.json";
    final static String NQUEENS_FUNCTION_URL_JP = "https://jp-tok.functions.appdomain.cloud/api/v1/web/7cd61490-a6a6-4870-8451-65ca48fe9d21/default/H01-task1-nqueens.json";
    final static String NQUEENS_FRACTION_MONOLITH = "https://eu-gb.functions.appdomain.cloud/api/v1/web/tkupek-uibk_dev/default/H02-task1-nqueens-fractions.json";
    final static String NQUEENS_FRACTION_X2FAAS= "https://eu-gb.functions.appdomain.cloud/api/v1/web/tkupek-uibk_dev/default/H02-task2-nqueens-fractions.json";

    public static void main(String[] args) {
        if (args.length != 2) {
            System.err.println("no valid parameters k and n provided");
            return;
        }
        int k, n;

        try {
            k = Integer.parseInt(args[0]);
            n = Integer.parseInt(args[1]);
        } catch (NumberFormatException ex) {
            System.err.println("parameters n or k is not a number");
            return;
        }

        Evaluator evaluator = new Evaluator();
        try {
            Map<String, Object> input = new HashMap<>();
            input.put("n", n);
            input.put("from", 0);
            input.put("to", 16777216);

            evaluator.runTest(k, input, NQUEENS_FRACTION_MONOLITH);
            evaluator.runTest(k, input, NQUEENS_FRACTION_X2FAAS);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
