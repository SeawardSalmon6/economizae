import { FormEventHandler } from "react";
import { Layout } from "~components/Layout";
import { Form } from "~components/Form";
import { Input } from "~components/Input";
import { Button } from "~components/Button";
import GIRL_IMAGE from "~assets/img/girl.png";
import formStyles from "~components/Form/Form.module.css";
import styles from "./AddProduct.module.css";
import { ScanBarcode } from "lucide-react";

export function AddProduct() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, FormDataEntryValue> = {};

    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    console.log(JSON.stringify(data, null, 4));
    form.reset();
  };

  return (
    <Layout className={styles.addProductPage}>
      <div className={styles.mainContainer}>
        <div className={styles.imageSection}>
            <img src={GIRL_IMAGE} alt="Person holding Scanning Product" />
        </div>
        <div className={styles.formSection}>
          <h1>cadastro de produto</h1>
          <p>ajude a comunidade economizaê a estar sempre atualizada!</p>
          <Form onSubmit={handleSubmit}>
            <div className={formStyles.inputsWrapper}>
                <div className={styles.barcodeWrapper}>
                    <div className={styles.barcodeSection}>
                        <ScanBarcode strokeWidth={1.8} size={21} strokeLinejoin="round" strokeLinecap="round" />
                        <p>Cadastrar produto</p>
                    </div>
                    <a className={styles.barcodeText}>ou digite o código manualmente</a>
                </div>
              <Input
                id="price"
                type="number"
                label="preço"
                placeholder="R$ 00,00"
                required
              />
              <Input
                id="market"
                type="text"
                label="mercado"
                placeholder="selecione o mercado"
                required
              />
            </div>
            <Button htmlType="submit" className={styles.submitButton}>
              enviar produto
            </Button>
          </Form>
        </div>
      </div>
    </Layout>
  );
} 