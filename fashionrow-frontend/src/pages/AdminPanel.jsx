import { useState, useEffect } from 'react';

const STORAGE_KEY = 'adminProducts';

function AdminPanel() {
  const [activeTab, setActiveTab] = useState('products');

  // form state
  const [form, setForm] = useState({
    id: null,
    name: '',
    price: '',
    category: 'men',
    tag: 'New',
    sizes: [],
    image: '',
    rating: 5,
    description: ''
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setProducts(JSON.parse(raw));
  }, []);

  const sizeOptions = ['XS','S','M','L','XL','XXL','2Y','4Y','6Y','8Y','10Y','12Y'];

  function updateForm(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  function toggleSize(size) {
    setForm(prev => ({
      ...prev,
      sizes: prev.sizes.includes(size) ? prev.sizes.filter(s => s !== size) : [...prev.sizes, size]
    }));
  }

  function resetForm() {
    setForm({ id: null, name: '', price: '', category: 'men', tag: 'New', sizes: [], image: '', rating: 5, description: '' });
  }

  function saveToStorage(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event('adminProductsUpdated'));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.price) return alert('Please provide name and price');

    const item = {
      id: form.id || Date.now(),
      name: form.name,
      price: Number(form.price),
      category: form.category,
      tag: form.tag,
      sizes: form.sizes,
      image: form.image || 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400',
      rating: Number(form.rating) || 5,
      description: form.description
    };

    let updated;
    if (form.id) {
      updated = products.map(p => p.id === form.id ? item : p);
    } else {
      updated = [item, ...products];
    }

    setProducts(updated);
    saveToStorage(updated);
    resetForm();
  }

  function handleEdit(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    setForm({ ...p });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleDelete(id) {
    if (!window.confirm('Delete this product?')) return;
    const updated = products.filter(p => p.id !== id);
    setProducts(updated);
    saveToStorage(updated);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b">
        <button
          onClick={() => setActiveTab('products')}
          className={`px-4 py-2 ${activeTab === 'products' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-600'}`}
        >
          Manage Products
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`px-4 py-2 ${activeTab === 'orders' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-600'}`}
        >
          Orders
        </button>
        <button
          onClick={() => setActiveTab('offers')}
          className={`px-4 py-2 ${activeTab === 'offers' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-600'}`}
        >
          Special Offers
        </button>
      </div>

      {/* Content */}
      {activeTab === 'products' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Add / Edit Product</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input value={form.name} onChange={e => updateForm('name', e.target.value)} type="text" placeholder="Product Name" className="w-full px-4 py-2 border rounded" />
              <input value={form.price} onChange={e => updateForm('price', e.target.value)} type="number" placeholder="Price (in ₹)" className="w-full px-4 py-2 border rounded" />
              <select value={form.category} onChange={e => updateForm('category', e.target.value)} className="w-full px-4 py-2 border rounded">
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
              </select>
              <input value={form.tag} onChange={e => updateForm('tag', e.target.value)} type="text" placeholder="Tag (e.g. New, Bestseller)" className="w-full px-4 py-2 border rounded" />
              <input value={form.image} onChange={e => updateForm('image', e.target.value)} type="text" placeholder="Image URL" className="w-full px-4 py-2 border rounded" />
              <select value={form.rating} onChange={e => updateForm('rating', e.target.value)} className="w-full px-4 py-2 border rounded">
                {[5,4,3,2,1].map(r => <option key={r} value={r}>{r} Star</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Available Sizes (select multiple)</label>
              <div className="flex flex-wrap gap-2">
                {sizeOptions.map(s => (
                  <button type="button" key={s} onClick={() => toggleSize(s)} className={`px-3 py-1 border rounded ${form.sizes.includes(s) ? 'bg-purple-600 text-white' : 'bg-white text-gray-700'}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <textarea value={form.description} onChange={e => updateForm('description', e.target.value)} placeholder="Description" className="w-full px-4 py-2 border rounded" rows="4"></textarea>

            <div className="flex gap-2">
              <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">{form.id ? 'Update Product' : 'Add Product'}</button>
              <button type="button" onClick={resetForm} className="px-6 py-2 border rounded">Reset</button>
            </div>
          </form>

          {/* Existing products list */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Existing Products ({products.length})</h3>
            <div className="space-y-4">
              {products.length === 0 && <div className="text-gray-600">No admin products yet.</div>}
              {products.map(p => (
                <div key={p.id} className="p-4 border rounded flex justify-between items-center">
                  <div>
                    <div className="font-semibold">{p.name} <span className="text-sm text-gray-500">({p.category})</span></div>
                    <div className="text-sm text-gray-600">{p.sizes.join(', ')} — ₹{p.price}</div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(p.id)} className="px-3 py-1 border rounded">Edit</button>
                    <button onClick={() => handleDelete(p.id)} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'orders' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
          <p className="text-gray-600">No orders yet.</p>
        </div>
      )}

      {activeTab === 'offers' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Create Special Offer</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Offer Title" className="w-full px-4 py-2 border rounded" />
            <input type="number" placeholder="Discount %" className="w-full px-4 py-2 border rounded" />
            <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">Create Offer</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AdminPanel;