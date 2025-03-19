export function EmailTemplate({ name, email, phone, company, message }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ background: '#1E1E1E', padding: '20px', textAlign: 'center' }}>
        <img 
          src="https://res.cloudinary.com/dl4jtxnnv/image/upload/v1742314338/Group_1_t1wmpz.svg"
          alt="ImproveAI Logo"
          style={{ width: '95px', height: '86px' }}
        />
      </div>
      
      <div style={{ padding: '20px' }}>
        <h1 style={{ color: '#1E1E1E', fontSize: '24px', marginBottom: '20px' }}>
          Nova mensagem de contato
        </h1>
        
        <div style={{ marginBottom: '20px' }}>
          <p style={{ margin: '10px 0', color: '#4A5568' }}>
            <strong>Nome:</strong> {name}
          </p>
          <p style={{ margin: '10px 0', color: '#4A5568' }}>
            <strong>Email:</strong> {email}
          </p>
          <p style={{ margin: '10px 0', color: '#4A5568' }}>
            <strong>Telefone:</strong> {phone}
          </p>
          <p style={{ margin: '10px 0', color: '#4A5568' }}>
            <strong>Empresa:</strong> {company}
          </p>
        </div>
        
        <div style={{ 
          background: '#f7f8fb', 
          padding: '20px', 
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <h2 style={{ color: '#1E1E1E', fontSize: '18px', marginBottom: '10px' }}>
            Mensagem:
          </h2>
          <p style={{ color: '#4A5568', lineHeight: '1.6' }}>
            {message}
          </p>
        </div>
        
        <div style={{ textAlign: 'center', color: '#718096', fontSize: '14px' }}>
          <p>Esta mensagem foi enviada através do formulário de contato do site.</p>
        </div>
      </div>
      
      <div style={{ 
        background: '#f7f8fb', 
        padding: '20px',
        textAlign: 'center',
        borderTop: '1px solid #e2e8f0'
      }}>
        <p style={{ color: '#718096', fontSize: '14px', margin: '0' }}>
          © {new Date().getFullYear()} ImproveAI. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
} 